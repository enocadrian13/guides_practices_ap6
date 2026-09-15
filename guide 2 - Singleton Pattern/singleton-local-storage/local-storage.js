// Singleton for LocalStorage Manager
class LocalStorageManager {
  constructor() {
    if (LocalStorageManager.instance) {
      return LocalStorageManager.instance; // return the same instance
    }

    LocalStorageManager.instance = this;
    return this;
  }

  // Save data
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

   
  }

  // Load data
  load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Remove data
  remove(key) {
    localStorage.removeItem(key);
  }

  // Clear all
  clear() {
    localStorage.clear();
  }
}

class ToggleWebTheme{
  constructor(){
    if(ToggleWebTheme.instance){
      return ToggleWebTheme.instance;
    }
  }

  setTheme(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadTheme(key){
    const theme = localStorage.getItem(key);

    console.log(JSON.parse(theme));
  }
  
  resetTheme(){
    localStorage.clear();
  }
  
  toggleTheme(){
    // console.log("Trigger")
     const data = localStorage.getItem('theme');
     const theme = data ? JSON.parse(data) : null;

    //  console.log(theme)
    
    if(theme.toggle === 'dark'){
      this.setTheme('theme', {toggle: 'light'})
    }else{
      this.setTheme('theme', {toggle: 'dark'})
    }
  }
}


const theme = new ToggleWebTheme();
