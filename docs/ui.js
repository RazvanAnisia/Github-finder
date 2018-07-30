class UI{
  constructor(){
    this.profile = document.getElementById('profile');
 }
 //Display profile
  showProfile(user){
    this.profile.innerHTML = `
    <div class ='card card-body mb-3'>
      <div class='row'>
        <div class="col-md-3">
          <img class='img-fluid mb-2' src="${user.avatar_url}">
          <a href = '${user.html_url}' target ='_blank' class='btn btn-primary btn-block mb-3'>View Profile<a/>
        </div>
        <div class="col-md-9">
          <span class='badge badge-primary '>Public repos:${user.public_repos}</span>
          <span class='badge badge-secondary '>Public Gists:${user.public_repos}</span>
          <span class='badge badge-success '>Followers:${user.followers}</span>
          <span class='badge badge-info '>Following:${user.following}</span>
          <br><br>
          <ul class='list-group'>
            <li class='list-group-item '>Company: <strong>${user.company ? user.company : 'Not specified'} </strong></li>
            <li class='list-group-item'>Website/Blog:<strong> <a href=${user.blog ? user.blog :'#'}>${user.blog ? user.blog :'Not specified'} 
            </a></strong></li>
            <li class='list-group-item'>Location: <strong>${user.location ? user.location : 'Not specified'} </strong></li>
            <li class='list-group-item'>Member since: <strong>${user.created_at.slice(0,10) } </strong></li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class='page-heading mb-3'>Latest repos</h3>
    <div id='repos'></div>
    `
  }
  //Display repos
  showRepos(repos){
    let output = ``;
    repos.forEach(repo => {
      output += `
      <div class='card card-body mb-2'>
        <div class='row'>
          <div class='col-md-6'>
          <a href='${repo.html_url}' target = "_blank">${repo.name}</a>
          </div>
          <div class='col-md-6'>
          <span class='badge badge-primary'>Stars:${repo.stargazers_count}</span>
          <span class='badge badge-secondary'>Watchers:${repo.watchers_count}</span>
          <span class='badge badge-success'>Followers:${repo.forks_count}</span>
          </div>
        </div>
      </div>
      ` })
       //Output repos
       document.getElementById('repos').innerHTML = output;
  }
 
  //Clear Profile
  clearProfile(){
    this.profile.innerHTML ='';
  }
  //Display Alert
  showAlert(msg,alertClass){
     this.profile.innerHTML = `<div class='${alertClass}'>${msg}<div>`;
     
     //Timeout after 3 seconds
     setTimeout(this.clearProfile, 3000)
  }
  
  
}
