import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import BackgroundPattern from "@/components/background-pattern";
import PetContextProvider from "@/contexts/pet-context-provider";
import {Pet} from "@/lib/types";
import SearchContextProvider from "@/contexts/search-context-provider";

const Layout = async ({children}:{children: React.ReactNode} ) => {
    const response = await fetch("https://bytegrad.com/course-assets/projects/petsoft/api/pets");
    if (!response.ok) {
        throw new Error("Failed to fetch pets");
    }
    const data: Pet[] = await response.json();
    return (
        <>
            <BackgroundPattern />
            <div className=" flex flex-col max-w-[1050px] mx-auto  px-4 min-h-screen ">
                <AppHeader />

                <SearchContextProvider>

                <PetContextProvider data={data}>{children}</PetContextProvider>

                </SearchContextProvider>
                <AppFooter />
            </div>
        </>
    );
};

export default Layout;