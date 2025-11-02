import type { ICellRendererParams } from 'ag-grid-community';
// import onBtnStartEditing from './main.ts';

export class CustomDeleteButtonComponent {
    eGui!: HTMLDivElement;
    eButton: any;
    eventListener!: () => void;

    init(params: ICellRendererParams) {
      this.eGui = document.createElement('div');
      this.eButton = document.createElement('button');
      this.eButton.className = 'btn-simple';
      this.eButton.textContent = 'Delete';
      this.eButton.addEventListener('click', () => this.onBtnDelete(params));
      this.eGui.appendChild(this.eButton);
    }

    getGui() {
        return this.eGui;
    }

    refresh() {
        return false;
    }

    onBtnDelete(params) { 
      params.api.applyTransaction({
        remove: [params.node.data]
      });
    }

    onBtnSave(params) {
        console.log('Saved');
        this.eButton.textContent = 'Edit';
        params.api.stopEditing();
    }

    destroy(params?) {
        if (this.eButton) {
            this.eButton.removeEventListener('click', this.eventListener);
        }
    }
}
