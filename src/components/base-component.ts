namespace App {
    export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
        element: U;
        hostElement: T;
        templateElement: HTMLTemplateElement;

        constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
            this.hostElement = document.getElementById(hostElementId)! as T;
            this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;

            const importedNode = document.importNode(this.templateElement.content, true);
            this.element = importedNode.firstElementChild as U;
            if (newElementId) {
                this.element.id = newElementId;
            }

            this.attach(insertAtStart);
        }

        private attach(insertAtBeginning: boolean) {
            this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
        }

        abstract configure(): void;
        abstract renderContent(): void;
    }
}