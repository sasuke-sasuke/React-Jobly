
export default function JobCard({jobs}) {

    return (
        <>
            {jobs.map(j => (
                <div key={j.id}>
                    <h2>{j.title}</h2>
                    <p>{j.companyName}</p>
                    <p>Salary: {j.salary}</p>
                    <p>Equity: {j.equity}</p>
                    <button>Apply</button>
                </div>
            ))}
        </>
    )
}