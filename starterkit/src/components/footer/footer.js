import {Component} from "react";
import React from "react";
import './footer.scss';
import '../../App.scss';






class Footer extends Component {

    render() {
        return (
            <div className="container footer">
                <div className="footer-box-1 footerBox"><h1>FOOTER 1</h1></div>
                <div className="footer-box-2 footerBox"><h1>FOOTER 2</h1></div>
                <div className="footer-box-3 footerBox"><h1>FOOTER 3</h1></div>

            </div>



        );
    }
}

export default Footer;