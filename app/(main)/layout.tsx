import { getCategories } from "@/actions/get-categories";
import { getStore } from "@/actions/get-store";
import Footer from "@/components/footer/footer-store";
import NavBar from "@/components/navigation/nav-bar-component";

const StoreComponent = async ({ children }: { children: React.ReactNode }) => {
  const store = await getStore();
  const arrCategories = await getCategories();

  return (
    <>
      <NavBar store={store} arrCategories={arrCategories} />
      <div className="flex flex-col h-full">{children}</div>
      <Footer store={store} arrCategories={arrCategories}  />
    </>
  );
};

export default StoreComponent;
