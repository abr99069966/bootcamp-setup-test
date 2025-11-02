import type { ICellRendererParams } from 'ag-grid-community';
// import onBtnStartEditing from './main.ts';

export class CustomEditButtonComponent {
    eGui!: HTMLDivElement;
    eButton: any;
    eventListener!: () => void;

    init(params: ICellRendererParams) {
        if (params.data['editable'] === undefined || params.data['editable'] === true) {
            this.eGui = document.createElement('div');
            this.eButton = document.createElement('button');
            this.eButton.className = 'btn-simple';
            this.eButton.textContent = 'Edit';
            this.eButton.addEventListener('click', () => this.onBtnStartEditing(params));
            this.eGui.appendChild(this.eButton);
        } else {
            this.eGui = null;
        }
    }

    getGui() {
        return this.eGui;
    }

    refresh() {
        return false;
    }

    onBtnStartEditing(params) { 
        if(this.eButton.textContent == 'Edit') {
            this.eButton.textContent = 'Save';
            params.api.startEditingCell( {
                rowIndex: params.node.rowIndex,
                colKey: "athlete"
            });
        } else {
            this.onBtnSave(params);
        }
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
