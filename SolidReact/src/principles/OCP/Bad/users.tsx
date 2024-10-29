
const users = [
    {
      id: 1,
      name: "John Doe",
      role: "Product designer",
      userType: "regular",
      isActive: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketer",
      userType: "regular",
      isActive: true,
    },
    {
      id: 3,
      name: "Edward Simons",
      role: "Snr software engineer",
      userType: "admin",
      isActive: true,
    },
];

function User({ userDetails }:any) {
    const { name, role, userType, isActive } = userDetails;
    return (
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <p>Status: {isActive ? "Online" : "Offline"}</p>
        {userType === "admin" && (
          <div>some details and logic for admin users</div>
        )}
        {userType === "regular" && (
          <div>some details and logic for regular users</div>
        )}
      </div>
    );
}

function Users() {
 return (
   <>
     {users.map((user) => {
       return <User userDetails={user} key={user.id} />;
     })}
   </>
 );
}

export default Users;