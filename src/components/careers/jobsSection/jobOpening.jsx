import React from "react";
import Buttons from "./button/buttons";
import Link from "next/link";

function JobOpening({ department, jobs }) {
	return (
		<>
			{jobs.length ? (
				<div className="available_jobs">
					<h3>{department.name}</h3>

					{jobs.map((job) => (
						<div key={job.id}>
							<h2>{job.job_title}</h2>
							<div className="job__details">
								<div id="job__details__price">
									<p>{job.job_type}</p>
									<p id="price">{job.salary_range}</p>
								</div>
								<div id="job__details__text">
									<p>{job.description}</p>
								</div>
								<div></div>
								<Link
									href={`/job-details/${job?.job_title
										?.replace(/ /g, "-")
										.toLowerCase()}/${job.id}`}
								>
									<Buttons />
								</Link>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="no_opening">
					<h3>{department.name}</h3>

					<p>No opening in {department.name}</p>
				</div>
			)}
		</>
	);
}

export default JobOpening;
