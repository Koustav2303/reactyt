
import Card from "./components/Card";

const App = (props) => {
  const jobOpenings = [
    {
      brand: "Google",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFUTi1RsVDFSupmzDUJ5I3ZHBtwz043rbHQ&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      payment: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brand: "Amazon",
      logo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      companyName: "Amazon",
      datePosted: "2 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full-time",
      tag2: "Entry Level",
      payment: "$30/hr",
      location: "Hyderabad, India",
    },
    {
      brand: "Microsoft",
      logo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Frontend Developer",
      tag1: "Part-time",
      tag2: "Mid Level",
      payment: "$40/hr",
      location: "Bangalore, India",
    },
    {
      brand: "Apple",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVrW3WGYFVE_Lv_xxU6JLMyg2bHKiY2vHUg&s",
      companyName: "Apple",
      datePosted: "7 days ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      payment: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      brand: "Meta",
      logo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "Data Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      payment: "$55/hr",
      location: "Bangalore, India",
    },
    {
      brand: "Netflix",
      logo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      companyName: "Netflix",
      datePosted: "12 days ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      payment: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brand: "Adobe",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Mid Level",
      payment: "$35/hr",
      location: "Noida, India",
    },
    {
      brand: "IBM",
      logo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
      companyName: "IBM",
      datePosted: "8 days ago",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      payment: "$38/hr",
      location: "Pune, India",
    },
    {
      brand: "Oracle",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/oracle-1-logo-svg-vector.svg",
      companyName: "Oracle",
      datePosted: "4 days ago",
      post: "Database Administrator",
      tag1: "Full-time",
      tag2: "Mid Level",
      payment: "$42/hr",
      location: "Bangalore, India",
    },
    {
      brand: "Salesforce",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLtUJ6G8FpU7bL2qxbMUEx46keaSgXO6Hwg&s",
      companyName: "Salesforce",
      datePosted: "9 days ago",
      post: "Software Engineer Intern",
      tag1: "Part-time",
      tag2: "Entry Level",
      payment: "$25/hr",
      location: "Hyderabad, India",
    },
  ];

  console.log(jobOpenings);
  
  return <div className="parent">
    {jobOpenings.map(function(elem,idx){
      console.log(idx)

      return <div>
        <Card key={idx} company = {elem.companyName} post = {elem.post} logo = {elem.logo} tag1 = {elem.tag1} tag2 = {elem.tag2} payment = {elem.payment} location = {elem.location} datePosted = {elem.datePosted} />
      </div>
    })}
  </div>;
};

export default App;
