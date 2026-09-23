import { AddPaperForm } from "../components/import/AddPaperForm";

export default function DoiPage() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="mx-auto w-full max-w-[640px] px-6 py-8">
        <h1 className="font-display text-[27px] font-semibold leading-tight tracking-[-0.015em] text-text mb-6">
          Add Paper
        </h1>
        <AddPaperForm />
      </div>
    </div>
  );
}
