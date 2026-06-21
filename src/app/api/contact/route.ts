import { NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();
    const { subject } = body;
    const name = body.name?.trim?.() ?? "";
    const email = body.email?.trim?.() ?? "";
    const message = body.message?.trim?.() ?? "";

    const errors: string[] = [];

    if (name.length < 2) {
      errors.push("Nome deve ter pelo menos 2 caracteres");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Email inválido");
    }

    if (message.length < 10) {
      errors.push("Mensagem deve ter pelo menos 10 caracteres");
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join("; ") }, { status: 400 });
    }

    const sanitized = {
      name: name.slice(0, 100),
      email: email.slice(0, 254),
      subject: (subject || "").trim().slice(0, 200),
      message: message.slice(0, 5000),
    };

    // Integrar com serviço de email (Resend, SendGrid, SES, etc.)
    console.log("--- NOVA MENSAGEM DE CONTATO ---");
    console.log(`Nome: ${sanitized.name}`);
    console.log(`Email: ${sanitized.email}`);
    console.log(`Assunto: ${sanitized.subject || "Sem assunto"}`);
    console.log(`Mensagem: ${sanitized.message}`);
    console.log("--------------------------------");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Erro ao processar contato:", err);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
