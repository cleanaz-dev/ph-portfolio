const ExpertArea = () => {
  const expertItems = [
    { id: 1, icon: "assets/img/icons/react-native.svg", name: "React" },
    { id: 2, icon: "assets/img/icons/nextjs.svg", name: "NextJS" },
    { id: 3, icon: "assets/img/icons/prisma-orm.svg", name: "Prisma" },
    { id: 4, icon: "assets/img/icons/mongodb.svg", name: "MongoDB" },
    { id: 5, icon: "assets/img/icons/chatgpt.svg", name: "ChatGPT" },
    { id: 6, icon: "assets/img/icons/claude.svg", name: "Anthropic" },
    { id: 7, icon: "assets/img/icons/notion.svg", name: "Notion" },
    { id: 8, icon: "assets/img/icons/javascript.svg", name: "JavaScript" },
    { id: 9, icon: "assets/img/icons/typescript.svg", name: "TypeScript" },
    { id: 10, icon: "assets/img/icons/aws.svg", name: "AWS" },
    { id: 11, icon: "assets/img/icons/tailwind.svg", name: "Tailwind" },
    { id: 12, icon: "assets/img/icons/stripe.svg", name: "Stripe" },
   
  ];
  return (
    <div className="card expertise-card h-auto">
      <div className="card-body">
        <h3 className="card-title">My Expert Area</h3>
        <div className="expertise-main mt-24">
          <div className="row g-3">
            {expertItems.map((item) => (
              <div className="col-xl-4 col-md-4 col-sm-6 col-12" key={item.id}>
                <div className="expertise-item">
                  <div className="image text-center">
                    <img src={item.icon} alt={item.name} />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertArea;
