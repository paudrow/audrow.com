import { PageLayout } from "../components/PageLayout.tsx";
import { Resume } from "../components/Resume.tsx";

export default function ResumePage() {
  return (
    <PageLayout currentPage="resume">
      <Resume />
    </PageLayout>
  );
}
