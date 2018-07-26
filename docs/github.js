class Github{
  constructor(){
    this.client_id = '581c5e6e52bf7f31c0f2';
    this.client_secret = '7e2c907709f1c7424d154fd4c932f5e43acc23e0'
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }
  async getUser(user){
    //wait for fetch response
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    } 
  }
}