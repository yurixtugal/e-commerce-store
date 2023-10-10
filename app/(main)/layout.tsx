import { getStore } from "@/actions/get-store";
import NavBar from "@/components/navigation/nav-bar-component";

const StoreComponent = async ({ children }: { children: React.ReactNode }) => {
  const store = await getStore();
  return (
    <html lang="en">
      <body>
        <NavBar store={store} />
        {children}
      </body>
    </html>
  );
};

export default StoreComponent;
