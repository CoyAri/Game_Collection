import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {

    return (
        <>
            <div className="h-dvh bg-stone-900 select-none">
                <br/>
                <Header/>
                <br/>
                <div className="container h-full max-h-[40rem] flex justify-center mb-6">
                    {props.children}
                </div>
                <br />
                <Footer className="hidden"/>
            </div>
        </>
    )
}