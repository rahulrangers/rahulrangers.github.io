import { Octokit } from "octokit"
import { useEffect, useState } from "react";
const Details = ()=>{
    type UserInfo = {
        avatar_url: string;
        bio: string | null;
        blog: string | null;
        company: string | null;
        created_at: string;
        email: string | null;
        events_url: string;
        followers: number;
        followers_url: string;
        following: number;
        following_url: string;
        gists_url: string;
        gravatar_id: string | null;
        hireable: boolean | null;
        html_url: string;
        id: number;
        location: string | null;
        login: string;
        name: string | null;
        node_id: string;
        organizations_url: string;
        public_gists: number;
        public_repos: number;
        received_events_url: string;
        repos_url: string;
        site_admin: boolean;
        starred_url: string;
        subscriptions_url: string;
        twitter_username?: string | null |undefined;
        type: string;
        updated_at: string;
        url: string;
      };
      
    const [info,setinfo]=useState<UserInfo>()
useEffect(()=>{
    const octokit = new Octokit({
        auth: import.meta.env.VITE_REACT_APP_TOKEN.replaceAll('?','')
    })
octokit.request('GET /user', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
    .then((res) => {
      const data = res.data;
      if(data){
     setinfo(data)
      }
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
},[])
  return(
    <div className="flex justify-center items-center">
    <div className="sm:w-96 sm:h-96 p-5  border-2 border-black">
    <div className="flex justify-center text-[20px] font-bold font-kalnia">Github Profile</div>
    {info?(
        <>
         <div className=" my-5 w-20 border-2 border-black rounded-full mx-auto " >
        <img className="rounded-full" src={info.avatar_url} alt="profile" />
    </div>
    <div className="flex justify-center  font-bold font-kalnia">Name : {info.login}</div>
    <div className="flex justify-center  font-bold font-kalnia">Public_repos : {info.public_repos}</div>
    <div className="flex justify-center  font-bold font-kalnia">followers : {info.followers}</div>  
    <div className="flex justify-center  font-bold font-kalnia">followers : {info.following}</div>
    <div className="flex justify-center  font-bold font-kalnia">created_at : {info.created_at}</div>
    </>):(<div> Loading ...</div>)}
    </div>
    </div>
  )
}
export default Details