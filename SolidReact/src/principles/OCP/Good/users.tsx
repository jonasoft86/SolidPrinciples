export const users = [
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

interface UserProps {
    id: number,
    name: string,
    role: string,
    userType: string,
    isActive: boolean,
}

function User ({userDetails, children}:any) {
    const { name, role, isActive } = userDetails;
    return (
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <p>Status: {isActive ? 'Online' : 'Offline'}</p>
        {children}
      </div>
    )
}

const RegularUser = ( userDetails :UserProps) =>{
    return (
      <User userDetails={userDetails}>
        <div>content and logic for regular user</div>
      </User>
    );
}

const AdminUser = ( userDetails :UserProps) => {
    return (
      <User userDetails={userDetails}>
        <div>content and logic for admin user</div>
      </User>
    );
}
function Users() {

    const userTypes = {
      regular: AdminUser,
      admin: RegularUser,
    };
    
    return (
      <>
        {users.map((user:UserProps) => {
          const UserComponent = userTypes[user.userType]();
          return <UserComponent userDetails={user} key={user.id} />;
        })}
      </>
    );
}

export default Users;