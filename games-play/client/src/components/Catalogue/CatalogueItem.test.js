import { ReactDOM } from "react-dom/client";
import { render, screen } from "@testing-library/react";
import { CatalogueItem } from "./CatalogueItem";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Catalog Item Component", () => {
  test("Show title", () => {
    const title = "TestTitle";
    /* const container = document.createElement("div");
    document.body.append(container);
    const root = ReactDOM.createRoot(container);
    root.render(<CatalogueItem title={title} />);
    const actualTitle = document.querySelector(".h2").textContent;
    expect(actualTitle).toBe(title);*/

    render(
        <BrowserRouter>
        <CatalogueItem title={title} />
        </BrowserRouter>
    );
 
     // eslint-disable-next-line testing-library/prefer-presence-queries
     expect(screen.queryByText(title)).toBeInTheDocument();
  });

  test("click on details", async () => {
    global.window = { location: { pathname: null } };
    const itemId = "id";
    render(
      <BrowserRouter>
        <CatalogueItem _id={itemId} />
      </BrowserRouter>
    );
    await userEvent.click(screen.queryByText("Details"));

    expect(global.window.location.pathname).toContain(`/catalogue/${itemId}`);
  });
});
