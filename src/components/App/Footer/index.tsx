
export default function Footer() {
  return (
    <div className="text-center text-slate-300 mt-80">
      <p className="text-xs">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
      <p className="text-xs">
        Developed by{" "}
        <a
          href="https://github.com/Abdelrady-M"
          target="_blank"
          rel="noreferrer"
        >
          Abdelrady Mohamed
        </a>
      </p>
    </div>
  );
}

