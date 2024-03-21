import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { TodoDateTable } from "./_components/todo-date-table";

export default async function Page() {
  return (
    <main>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        </DashboardPageHeader>
        <DashboardPageMain>
          <TodoDateTable />
        </DashboardPageMain>
      </DashboardPage>
    </main>
  );
}
