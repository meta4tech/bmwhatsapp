
// Fetch data dari apk.json
fetch("/apk.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("version").textContent = data.latest_version;
    const changelog = data.changelog.map(item => `<li>${item}</li>`).join("");
    document.getElementById("changelogList").innerHTML = changelog;
    document.getElementById("downloadBtn").href = data.apk_url;
    data.old_versions.forEach(ver => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${ver.apk_url}">${ver.version}</a>`;
      document.getElementById("oldVersions").appendChild(li);
    });
  });

// Counter download
fetch("https://api.countapi.xyz/hit/bmwhatsapp.site/download")
  .then(res => res.json())
  .then(data => {
    document.getElementById("downloadCount").textContent = data.value.toLocaleString();
  });

// Mode Gelap
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
