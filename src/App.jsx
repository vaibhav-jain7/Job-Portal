import React from 'react'
import Card from './COMPONENTS/card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    fees: "$45/hr",
    location: "Mumbai, India",
    Link: "https://www.google.com/about/careers/applications/jobs/results#!t=jo&jid=127025001&"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    fees: "$60/hr",
    location: "Mumbai, India",
    Link: "https://careers.microsoft.com/v2/global/en/home.html?rt=university"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    fees: "$38/hr",
    location: "Mumbai, India",
    Link: "https://www.amazon.jobs/en/"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    fees: "$70/hr",
    location: "Mumbai, India",
    Link: "https://jobs.apple.com/en-in/search?location=india-INDC&page=2"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
    fees: "$40/hr",
    location: "Mumbai, India",
    Link: "https://www.metacareers.com/"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    fees: "$65/hr",
    location: "Mumbai, India",
    Link: "https://jobs.netflix.com/"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    fees: "$55/hr",
    location: "Mumbai, India",
    Link: "https://hire-r1.mokahr.com/social-recruitment/tesla/100004099#/"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "AI Research Intern",
    tag1: "Part-time",
    tag2: "Junior Level",
    fees: "$30/hr",
    location: "Mumbai, India",
    Link: "https://www.ibm.com/in-en/careers/career-opportunities"
  }
];
  return (
    <div className='Main'>
      {jobOpenings.map(function(elem){
        return <Card brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} fees={elem.fees} location={elem.location} Link={elem.Link}/>
      })}
    </div>
  )
}

export default App