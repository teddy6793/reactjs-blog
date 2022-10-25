import Header from "../Component/Header/Header";


function Layout(props) {
    return ( 
        
        <div>
            <Header></Header>
                {props.children}
            
        </div>
    );
}

export default Layout;