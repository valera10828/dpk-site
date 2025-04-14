import InfoCollege from "./Info";

const ContactsIcon = ({IconName , href}) => {
  const {icons} = InfoCollege[0].contacts;

  return (
    <div>
      <a href={href} dangerouslySetInnerHTML={{ __html: icons[IconName]}}/>
    </div>
  )
}

export default ContactsIcon;