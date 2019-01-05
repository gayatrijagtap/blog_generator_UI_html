const createPost = function() {
  let blog = new Object();
  let usrTheme = document.getElementById("theme").value;
  let themes = new Object();
  themes["travel"] = "/style_sheets/travelTheme.css";
  themes["cooking"] = "/style_sheets/cookingTheme.css";
  themes["animals"] = "/style_sheets/animalsTheme.css";
  themes["other"] = "/style_sheets/generalTheme.css";
  blog["styleSheet"] = themes[usrTheme];
  blog["author"] = document.getElementById("author").value;
  blog["date"] = new Date();
  blog["title"] = document.getElementById("title").value;
  blog["description"] = document.getElementById("desc").value;
  blog["post"] = new Object();
  blog.post["title"] = document.getElementById("ptitle").value;
  blog.post["content"] = document.getElementById("pcont").value;
  return blog;
};

const withTag = function(tag, content, cls = "") {
  let tagWithContent = [
    "<",
    tag,
    " class = ",
    cls,
    ">",
    content,
    "</",
    tag,
    ">"
  ].join("");
  return tagWithContent;
};

const generateBlog = function(blogContent) {
  let author = withTag("h2", blogContent.author, "left_align");
  let date = withTag("h3", blogContent.date, "left_align");
  let blogTitle = withTag("h1", blogContent.title);
  let blogDescription = withTag("p", blogContent.description);
  let blogData = author + date + blogTitle + blogDescription;
  return blogData;
};

const generatePost = function(postData) {
  let title = withTag("h2", postData.title);
  let content = withTag("p", postData.content);
  return title + content;
};

const createHTMLBlog = function(blog, posts, head) {
  let bodyContent = blog + posts;
  let body = withTag("body", bodyContent);
  let htmlBody = withTag("html", head + body);
  return htmlBody;
};

const addStyleSheet = function(styleSheet) {
  let style =
    "<link rel='stylesheet' type='text/css' href='" + styleSheet + "'>";
  let head = withTag("head", style);
  return head;
};

let createBlog = function() {
  let blogContent = createPost();
  let blogData = generateBlog(blogContent);
  let postData = generatePost(blogContent.post);
  let styleSheet = addStyleSheet(blogContent.styleSheet);
  let final = createHTMLBlog(blogData, postData, styleSheet);
  let blog = window.open("");
  blog.document.write(final);
};
