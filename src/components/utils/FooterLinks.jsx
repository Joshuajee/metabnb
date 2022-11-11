

const FooterLinks = ({title, links}) => {
    return (
        <div>
            
            <h4>{title}</h4>

            {
                links.map((link, index) => {
                    return (<a className="block mt-5 text-sm font-normal" key={index} href="/">{link.name}</a>)
                })
            }

        </div>
    );
}
  
export default FooterLinks;
  