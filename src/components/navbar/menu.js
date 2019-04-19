import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./navigation.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolledDown: false,
      isOpen: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleCloseCollapse = this.handleCloseCollapse.bind(this);
  }

  handleScroll() {
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let scrolledDownEnough = bodyScrollTop > 75 ? true : false;
    this.setState({
      hasScrolledDown: scrolledDownEnough
    });
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleCloseCollapse() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const whiteBackground = this.state.hasScrolledDown ? "white-background navbar-border" : "";
    const fontColor = this.state.hasScrolledDown ? "blue-font" : "white-font";

    return (
      <Navbar className={whiteBackground} fixed={"top"} light expand="md">
        <NavbarBrand href="/" className={fontColor}>
          Start Bootstrap
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar}>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} className={`${fontColor}`} navbar>
          
        <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about" className={fontColor} nav-link>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog"className={fontColor} nav-link>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact"className={fontColor} nav-link>Contact us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className={fontColor} nav-link>
                  Blogs
                </DropdownToggle>
                <DropdownMenu right >
                  <DropdownItem>
                    <NavLink href="/">
                    View Blogs
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                   <NavLink> Create Blog</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Menu;












// import React, { Component } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   NavLink,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";
// import ScrollchorItem from "./scrollchor-item";
// import Scrollspy from "react-scrollspy";
// import "./navigation.css";

// class Menu extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hasScrolledDown: false,
//       isOpen: false
//     };
//     this.handleScroll = this.handleScroll.bind(this);
//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.handleCloseCollapse = this.handleCloseCollapse.bind(this);
//   }

//   handleScroll() {
//     const bodyScrollTop =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     let scrolledDownEnough = bodyScrollTop > 75 ? true : false;
//     this.setState({
//       hasScrolledDown: scrolledDownEnough
//     });
//   }

//   toggleNavbar() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   handleCloseCollapse() {
//     if (this.state.isOpen) {
//       this.setState({
//         isOpen: !this.state.isOpen
//       });
//     }
//   }

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   render() {
//     const whiteBackground = this.state.hasScrolledDown ? "white-background navbar-border" : "";
//     const fontColor = this.state.hasScrolledDown ? "blue-font" : "white-font";

//     return (
//       <Navbar className={whiteBackground} fixed={"top"} expand="md">
//         <NavbarBrand href="Starter Logo" className={fontColor}>
//           Start Bootstrap
//         </NavbarBrand>
//         <NavbarToggler onClick={this.toggleNavbar}>
//           <i className={`fa fa-navicon ${fontColor}`} />
//         </NavbarToggler>
//         <Collapse isOpen={this.state.isOpen} className={`${fontColor}`} navbar>
//           <Scrollspy
//             items={["about", "projects", "contact"]}
//             currentClassName="active"
//             className={`${fontColor} ml-auto navbar-nav`}
//             navbar
//           >
//             <NavItem onClick={this.handleCloseCollapse}>
//               <ScrollchorItem to="/about" className="nav-link">
//                 About
//               </ScrollchorItem>
//             </NavItem>
//             <NavItem onClick={this.handleCloseCollapse}>
//               <ScrollchorItem to="/services" className="nav-link">
//                 Services
//               </ScrollchorItem>
//             </NavItem>
//             <NavItem onClick={this.handleCloseCollapse}>
//               <ScrollchorItem to="#product" className="nav-link">
//                 Product Section
//               </ScrollchorItem>
//             </NavItem>

//             <NavItem onClick={this.handleCloseCollapse}>
//               <NavLink
//                 href="http://xyz.com"
//                 target="_blank"
//                 className="external-link"
//                 rel="noopener noreferrer"
//               >
//                 Blog
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>



//           </Scrollspy>
//         </Collapse>
//       </Navbar>
//     );
//   }
// }

// export default Menu;
