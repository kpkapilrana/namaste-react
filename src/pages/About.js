import { Component } from "react";
import User from "./User";

import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor Called");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  componentWillUnmount() {
    // console.log("Compount Unmount Called");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>About Page</h1>
        <UserContext.Consumer>
          {({ logedInUser }) => <h1 className="font-bold">{logedInUser}</h1>}
        </UserContext.Consumer>
        {/* <User Name="Kapil" Location="Pune" Contact="kpapilrana" /> */}
        <UserClass
          Name="Kapil (Class)"
          Location="Pune Class"
          Contact="kpapilrana"
        />
        {/* <UserClass
          Name="Kapil (Class)"
          Location="Pune Class"
          Contact="kpapilrana"
        /> */}
      </div>
    );
  }
}

/**
 * Render Phase Start
 * Parent Constructor
 * Parent Render
 *    Child 1 Constructor
 *    Child 1 Render
 *
 *    Child 2 Constructor
 *    Child 2 Render
 * Render Phase End
 *
 *
 *  Commit Phase Start
 *    Child 1 Mount
 *    Child 2 Mount
 *    Parent Mount
 *  Commit Phase End
 */

/**
 * Mounting
 *    Constructor Called
 *    render Called (Dummy Data)
 *    Html With Dummy Data
 *    Compount Did Mount
 *    Api Call
 *    this.setState
 *
 * Update
 *    render Called (Api Data)
 *    Compount Did Updated
 */

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <User Name="Kapil" Location="Pune" Contact="kpapilrana" />
//       <UserClass
//         Name="Kapil (Class)"
//         Location="Pune Class"
//         Contact="kpapilrana"
//       />
//     </div>
//   );
// };

export default About;
