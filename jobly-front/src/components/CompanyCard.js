import {Link} from "react-router-dom";

export default function CompanyCard({companies}) {

    return (
        <>
            {companies.map(c => (
                <Link key={crypto.randomUUID()} to={`/companies/${c.handle}`}>
                    <div>
                        <h2>{c.name}</h2>
                        <p>{c.description}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}