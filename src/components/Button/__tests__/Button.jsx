import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("test Button component", () => {
    it("should render", () => {
        render(<Button>ClickMe</Button>);

        expect(screen.getByText('ClickMe')).toBeInTheDocument();
    })

    it("should invoke callback", () => {
        const mock = jest.fn();
        render(<Button onClick={mock}>ClickMe</Button>);
        const button = screen.getByText('ClickMe');

        fireEvent.click(button);
        fireEvent.click(button);

        expect(mock).toHaveBeenCalledTimes(2);
    })
});