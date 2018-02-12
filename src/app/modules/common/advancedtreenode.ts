export interface AdvancedTreeNode {
    id?: number;
    label?: string;
    data?: any;
    icon?: any;
    expandedIcon?: any;
    collapsedIcon?: any;
    children?: AdvancedTreeNode [];
    leaf?: boolean;
    expanded?: boolean;
    type?: string;
    parent?: AdvancedTreeNode;
    partialChecked?: boolean;
    checked?: boolean;
    styleClass?: string;
    draggable?: boolean;
    droppable?: boolean;
    selectable?: boolean;
}
