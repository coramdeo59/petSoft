import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import BackgroundPattern from "@/components/background-pattern";

const Layout = ({children}:{children: React.ReactNode} ) => {
    return (
        <>
            <BackgroundPattern />
            <div className="max-w-[1050px] mx-auto">
                <AppHeader />
                    {children}
                <AppFooter />
            </div>
        </>
    );
};

export default Layout;