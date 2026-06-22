import { Link } from "react-router-dom";
import veetoLogo from "@/assets/veeto-logo.svg";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={veetoLogo} alt="Veeto AI logo" className="w-7 h-7 rounded-md object-cover" />
            <span className="text-base font-semibold text-foreground">Veeto AI</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Veeto Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10"><strong>Last Updated:</strong> June 22, 2026</p>

          <p className="text-foreground/90 leading-relaxed">
            Welcome to Veeto (accessible via <a href="https://www.veeto.io/" className="text-primary hover:underline">https://www.veeto.io/</a>, and our integrated messaging bots). Veeto is a personal memory assistant designed to help you organize conversations, build relationship capital, and structure personal context.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Because Veeto processes highly personal and conversational data, we operate under a strict "Privacy-by-Design" framework. This Privacy Policy explains how we collect, use, process, and protect your information under the laws of the United States (including state-level frameworks like the CCPA/CPRA) and India (the Digital Personal Data Protection Act, 2023).
          </p>

          <hr className="my-8 border-border/60" />

          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Privacy at a Glance (Summary)</h2>
          <ul className="space-y-2 list-disc pl-6 text-foreground/90">
            <li><strong>We do not sell your data.</strong> Your memories and conversations are yours alone.</li>
            <li><strong>We do not train foundational models on your personal data.</strong> Neither our internal models nor our third-party partners use your memories to train public AI.</li>
            <li><strong>Hybrid AI Processing:</strong> We process your data using a mix of secure, internal, self-hosted models and enterprise-grade third-party LLMs (like OpenAI or Anthropic) via secure APIs with zero data retention.</li>
            <li><strong>You control your memory:</strong> You can command Veeto to "forget" specific details or delete your entire account at any time.</li>
          </ul>

          <hr className="my-8 border-border/60" />

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Information We Collect</h2>
          <p className="text-foreground/90">To provide the memory assistant service, we collect the following categories of data:</p>
          <ul className="space-y-2 list-disc pl-6 text-foreground/90 mt-3">
            <li><strong>Account & Identity Data:</strong> Phone number, messaging platform ID (e.g., WhatsApp or Telegram ID), name, and email address provided during onboarding.</li>
            <li><strong>Conversational & Prompt Data:</strong> The voice notes, text messages, and prompts you send to the Veeto bot.</li>
            <li><strong>Structured Memory Data:</strong> The summarized, indexed relationship capital and personal context that our AI extracts from your inputs to serve as your long-term memory store.</li>
            <li><strong>Metadata:</strong> Interaction timestamps, messaging platform types, and technical logs required for system maintenance and debugging.</li>
          </ul>

          <hr className="my-8 border-border/60" />

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Process Your Data (Our AI Architecture)</h2>
          <p className="text-foreground/90">Veeto processes your data using a secure, hybrid AI architecture designed to minimize external exposure:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">A. Internal & Self-Hosted AI Models</h3>
          <p className="text-foreground/90">Where possible, we route and process your data within our own securely hosted, private infrastructure using self-hosted artificial intelligence models.</p>
          <ul className="space-y-2 list-disc pl-6 text-foreground/90 mt-3">
            <li><strong>Data Isolation:</strong> When using self-hosted models, your data never leaves Veeto's controlled server environment.</li>
            <li><strong>No Leakage:</strong> These internal models are isolated, and any fine-tuning or contextual learning is tied strictly to your specific account environment, ensuring complete data containment.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">B. Third-Party Large Language Models (LLMs)</h3>
          <p className="text-foreground/90">For complex processing tasks, we may route your conversational inputs to trusted third-party LLM providers (such as OpenAI or Anthropic) via secure, enterprise API endpoints.</p>
          <ul className="space-y-2 list-disc pl-6 text-foreground/90 mt-3">
            <li><strong>Zero Data Retention (ZDR):</strong> We mandate strict data processing agreements ensuring that third-party providers process your inputs in real-time and do not retain, store, or log your data after a response is generated.</li>
            <li><strong>Strict No-Training Clauses:</strong> We explicitly prohibit third-party vendors from using your conversational data, prompts, or personal memories to train, fine-tune, or improve their public or proprietary models.</li>
          </ul>

          <hr className="my-8 border-border/60" />

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Sharing and Minimization</h2>
          <p className="text-foreground/90">Before transmitting any conversational prompt to a third-party LLM, Veeto employs internal data-minimization techniques. We strip or mask obvious, unnecessary personally identifiable information (PII) where technically feasible to protect your privacy without breaking the contextual utility of the model.</p>
          <p className="text-foreground/90 mt-3">We do not sell, rent, or trade your personal data or memory logs to third parties for advertising or marketing purposes.</p>

          <hr className="my-8 border-border/60" />

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Your Rights: Managing, Modifying, and "Forgetting" Memories</h2>
          <p className="text-foreground/90">We believe that you should have absolute sovereignty over your digital brain. In alignment with global privacy standards, we provide the following rights:</p>
          <ul className="space-y-2 list-disc pl-6 text-foreground/90 mt-3">
            <li><strong>Targeted Erasure ("The Forget Command"):</strong> You can directly instruct Veeto within the chat interface to "forget" specific facts, individuals, or past interactions. Once instructed, that specific data point is permanently deleted from your active memory profile.</li>
            <li><strong>Right to Access and Portability:</strong> You may request a structured export of all memories and context Veeto has securely stored for you.</li>
            <li><strong>Right to Correction:</strong> You can correct or update any misremembered or inaccurately structured information held by the assistant.</li>
            <li><strong>Complete Account Deletion:</strong> You can request total deletion of your account. Upon receiving this request, we will permanently purge all account data, chat histories, and stored memories from our active databases within 30 days, and from encrypted backups within 90 days.</li>
          </ul>

          <hr className="my-8 border-border/60" />

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Jurisdiction-Specific Disclosures</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">A. For Users in India (DPDP Act, 2023)</h3>
          <p className="text-foreground/90">Veeto operates as a <strong>Data Fiduciary</strong> under the Digital Personal Data Protection Act, 2023.</p>
          <ul className="space-y-2 list-disc pl-6 text-foreground/90 mt-3">
            <li><strong>Consent-Based Processing:</strong> We process your personal data solely based on your explicit, unambiguous consent provided during onboarding. You have the right to withdraw this consent at any time, though doing so will limit or terminate Veeto's ability to function.</li>
            <li><strong>Right to Nominate:</strong> In accordance with Indian law, you have the right to nominate any other individual to exercise your data rights in the event of death or incapacity.</li>
            <li><strong>Grievance Redressal:</strong> If you have any complaints or queries regarding how your data is handled, you may contact our designated Grievance Officer (see Section 8).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">B. For Users in the United States (State Privacy Laws / CPRA)</h3>
          <p className="text-foreground/90">Depending on your state of residence (e.g., California, Virginia, Colorado), you have specific statutory rights:</p>
          <ul className="space-y-2 list-disc pl-6 text-foreground/90 mt-3">
            <li><strong>Notice of Collection:</strong> We collect the categories of personal information listed in Section 2 for the business purpose of providing an AI personal assistant.</li>
            <li><strong>Do Not Sell or Share:</strong> Veeto does not "sell" or "share" your personal information for cross-context behavioral or targeted advertising.</li>
            <li><strong>Shine the Light / Right to Know:</strong> You have the right to request a disclosure of the categories of data we have collected and the specific third parties to whom it was disclosed.</li>
          </ul>

          <hr className="my-8 border-border/60" />

          <h2 className="text-2xl font-semibold mt-10 mb-4">7. Data Security and Encryption</h2>
          <p className="text-foreground/90">Your memories are highly sensitive, and we treat them as such. Veeto implements industry-leading security practices:</p>
          <ul className="space-y-2 list-disc pl-6 text-foreground/90 mt-3">
            <li><strong>Encryption:</strong> All data is encrypted in transit using Transport Layer Security (TLS) and encrypted at rest using Advanced Encryption Standard (AES-256) encryption.</li>
            <li><strong>Access Controls:</strong> Access to database layers is strictly restricted to essential automated system processes. No human employees at Veeto read your conversation logs unless explicitly authorized by you for technical troubleshooting support.</li>
          </ul>

          <hr className="my-8 border-border/60" />

          <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact & Grievance Officer</h2>
          <p className="text-foreground/90">Because Veeto operates natively inside your messaging app, we handle all support and data privacy grievances directly through the interface. You do not need to send an email or submit external forms.</p>
          <p className="text-foreground/90 mt-3"><strong>How to Lodge a Grievance:</strong> Simply type <code className="px-1.5 py-0.5 rounded bg-muted text-sm">/grievance</code> or <code className="px-1.5 py-0.5 rounded bg-muted text-sm">/support</code> followed by your message directly inside the Veeto chat window.</p>
          <p className="text-foreground/90 mt-3"><strong>Grievance Officer:</strong> Your submission will be routed directly to our designated Grievance Officer, who will review and address your request.</p>
          <p className="text-foreground/90 mt-3"><strong>Resolution Timeline:</strong> In compliance with the Indian Digital Personal Data Protection (DPDP) Act, we will acknowledge your grievance within 48 hours via the chat interface and work to resolve data privacy inquiries within the legally mandated timeframes.</p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
