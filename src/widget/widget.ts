(function(path) {
  const script = document.createElement('script');
  const firstScriptInTree = document.getElementsByTagName('script')[0];
  script.async = true;
  script.src = path

  firstScriptInTree.parentNode?.insertBefore(script, firstScriptInTree);
}('./bundle.js'))