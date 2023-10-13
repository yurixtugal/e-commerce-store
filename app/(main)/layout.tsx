import { getStore } from "@/actions/get-store";
import NavBar from "@/components/navigation/nav-bar-component";

const StoreComponent = async ({ children }: { children: React.ReactNode }) => {
  const store = await getStore();
  return (
    <>
      <NavBar store={store} />
      <div className="flex flex-col h-full">{children}</div>
    </>
  );
};

export default StoreComponent;
