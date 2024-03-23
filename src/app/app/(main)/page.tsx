import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { TodoDateTable } from "./_components/todo-date-table";
import { TodoUpsertSheet } from "./_components/todo-upsert-sheet";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default async function Page() {
  return (
    <main>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
          <DashboardPageHeaderNav>
            <TodoUpsertSheet>
              <Button size="sm" variant="outline">
                <PlusIcon className="w-4 h-4 mr-3" />
                Add task
              </Button>
            </TodoUpsertSheet>
          </DashboardPageHeaderNav>
        </DashboardPageHeader>
        <DashboardPageMain>
          <TodoDateTable />
        </DashboardPageMain>
      </DashboardPage>
    </main>
  );
}
