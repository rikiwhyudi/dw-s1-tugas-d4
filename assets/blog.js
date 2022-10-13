const dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  const title = document.getElementById("input-title").value;
  const content = document.getElementById("input-content").value;
  let image = document.getElementById("input-blog-image").files[0];

  //   buat url gambar tampil
  image = URL.createObjectURL(image);
  console.log(image);

  const blog = {
    title,
    content,
    image,
    postAt: new Date(),
    author: "Riki Wahyudi",
  };

  dataBlog.push(blog);
  console.log(dataBlog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";
  //   for (let i = 0; i < dataBlog.length; i++) {
  //     console.log(dataBlog[i]);
  for (const i in dataBlog) {
    document.getElementById("contents").innerHTML += `
    <div class="blog-list-item">
    <div class="blog-image">
      <img src="${dataBlog[i].image}" />
    </div>
    <div class="blog-info">
      <h1>
        <a href="blog-detail.html" target="_blank"
          >Dumbways Web App - 2021</a
        >
      </h1>
      <div class="detail-blog-duration">
        <p>durasi: 3 bulan</p>
      </div>
      <div class="blog-content">
        <p>
        ${dataBlog[i].content}
        </p>
      </div>
      <div class="download-apps">
      <a href="#">
        <i class="fa-brands fa-google-play fa-md"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-android fa-md"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-java fa-md"></i>
      </a>
    </div>
    </div>
    <div class="btn-group">
      <button class="btn-edit">edit</button>
      <button class="btn-delete">delete</button>
    </div>
  </div>
    `;
  }
}

renderBlog();
