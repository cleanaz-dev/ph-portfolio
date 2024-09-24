const Brands = () => {
  const brandItems = [
    { id: 1, icon: "assets/img/icons/notion.svg", name: "Notion" },
    { id: 2, icon: "assets/img/icons/webflow.svg", name: "Webflow" },
    { id: 3, icon: "assets/img/icons/mico.svg", name: "Miro" },
    { id: 4, icon: "assets/img/icons/framer.svg", name: "Framer" },
    { id: 5, icon: "assets/img/icons/firebase.svg", name: "Firebase" },
    { id: 6, icon: "assets/img/icons/docker.svg", name: "Docker" },
    { id: 7, icon: "assets/img/icons/github.svg", name: "Github" },
    { id: 8, icon: "assets/img/icons/google.svg", name: "Google" },
    { id: 9, icon: "assets/img/icons/heroku.svg", name: "Heroku" },
    { id: 10, icon: "assets/img/icons/chatgpt.svg", name: "ChatGPT" },
    { id: 11, icon: "assets/img/icons/claude.svg", name: "Anthropic" },
    { id: 12, icon: "assets/img/icons/mailchimp.svg", name: "MailChimp" },
    { id: 13, icon: "assets/img/icons/microsoft-365.svg", name: "Office 365" },
    { id: 14, icon: "assets/img/icons/nextjs.svg", name: "NextJS" },
    { id: 15, icon: "assets/img/icons/postgresql.svg", name: "PostgreSQL" },
    { id: 16, icon: "assets/img/icons/prisma-orm.svg", name: "Prisma" },
    { id: 17, icon: "assets/img/icons/react-native.svg", name: "React" },
    { id: 18, icon: "assets/img/icons/slack.svg", name: "Slack" },
    { id: 19, icon: "assets/img/icons/zapier.svg", name: "Zapier" },
    { id: 20, icon: "assets/img/icons/airtable.svg", name: "Air Table" },
  ];
  return (
    <div className="working-with-area">
      <h2 className="main-common-title">
      Experience with Global Tech Brands 🌍
      </h2>
      <div className="working-with-main">
        {brandItems.map((item) => (
          <div className="items" key={item.id}>
            <img src={item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
