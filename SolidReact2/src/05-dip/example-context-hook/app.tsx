import { UserCreationForm, UsersReport } from "./components";
import { UserRepositoryProvider } from "./providers";

export function App() {
  return <UserRepositoryProvider>
    <UsersReport />
    <UserCreationForm />
  </UserRepositoryProvider>
}
