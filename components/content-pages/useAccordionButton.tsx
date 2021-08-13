declare function useAccordionButton<T>(eventKey: string, onClick: (e: T) => void): (e: T) => void;

export default useAccordionButton;