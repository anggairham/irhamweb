import Layout from "@/components/Layout";
import Table from "@/components/Table";

export default function Index() {
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-7xl mt-10'>
        <h1 className='font-semibold text-4xl'>Reference List</h1>
        <p className='mt-2'>
          Beberapa referensi website yang digunakan ketika belajar bahasa
          pemrograman
        </p>
        <Table
          fields={["Keyword", "Link", "Tags"]}
          items={[
            {
              keyword: "react-table and react/jsx-key eslint rules",
              link: "https://github.com/TanStack/table/discussions/2647",
              tags: "Eslint, React-Table",
            },
            {
              keyword: "next js deploy github pages",
              link: "https://www.bravolt.com/post/deploying-next-js-to-github-pages https://github.com/DaveAldon/Next.js-and-GitHub-Pages-Example",
              tags: "Github",
            },
            {
              keyword: "github markdown emoji list",
              link: "https://gist.github.com/rxaviers/7360908",
              tags: "Github, Emoji",
            },
            {
              keyword: "github markdown emoji list",
              link: "https://gist.github.com/rxaviers/7360908",
              tags: "Github, Emoji",
            },
            {
              keyword: "React Table",
              link: "https://react-table-v7.tanstack.com/docs/overview",
              tags: "React, Javascript",
            },
            {
              keyword: "React Use Memo",
              link: "https://www.w3schools.com/react/react_usememo.asp",
              tags: "React, Javascript",
            },
            {
              keyword: "Admin Dashboard React Tailwind Envato",
              link: "http://preview.themeforest.net/item/elstar-react-tailwind-admin-template/full_screen_preview/39768117?_ga=2.123466888.2031695647.1670557144-1863647166.1669876657",
              tags: "React, TailwindCSS",
            },
            {
              keyword: "Html to React",
              link: "https://magic.reactjs.net/htmltojsx.html",
              tags: "React",
            },
            {
              keyword: "TailwindCSS Component",
              link: "https://flowbite.com/docs/getting-started/introduction/",
              tags: "TailwindCSS",
            },
            {
              keyword: "loop object keys javascript",
              link: "https://flexiple.com/javascript/loop-through-object-javascript/",
              tags: "Javascript",
            },
            {
              keyword: "iterate over object values react",
              link: "https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries",
              tags: "React, Javascript",
            },
            {
              keyword: "react initial props",
              link: "https://blog.logrocket.com/complete-guide-react-default-props/",
              tags: "React, Javascript",
            },
          ]}
        ></Table>
      </div>
    </Layout>
  );
}
