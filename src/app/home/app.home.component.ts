import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { LocaleService, Language, TranslationService } from 'angular-l10n';

import { AlertService } from '../alert/app.alert.service';
import { BusinessCardService } from '../business_card/app.businesscard.service';
import { BusinessCardAlertService } from '../business_card/app.businesscard.alert.service';
import { IBusinessCard } from '../business_card/app.ibusinesscard';
import { BusinessCard } from '../business_card/app.businesscard';

@Component ({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './app.home.component.html'
})
export class HomeComponent implements OnInit {
    @Language() lang: string;

    isSummaryEditable: boolean;
    isDescriptionEditable: boolean;
    isProcessing: boolean;
    businessCard: IBusinessCard;
    copyBusinessCard: IBusinessCard;

    constructor (private alertService: AlertService, private businessCardService: BusinessCardService,
        private localeService: LocaleService, private translationService: TranslationService,
        private businessCardAlertService: BusinessCardAlertService) {
        this.isDescriptionEditable = false;
        this.isSummaryEditable = false;
        this.isProcessing = false;
        this.businessCard = new BusinessCard();
    }

    ngOnInit() {
        this.alertService.clearAlert();
        let language = this.localeService.getCurrentLanguage();
        this.businessCardService.getBusinessCard("", language).subscribe((bc: IBusinessCard) => {
            this.businessCard = bc;
            this.businessCardAlertService.alertBusinessCard(bc);
        }, error => {
            this.alertService.errorAlert(this.translationService.translate('ErrConnectionRefused'));
        });
    }

    submitBusinessCard(): void {
        let language = this.localeService.getCurrentLanguage();
        this.isProcessing = true;
        this.businessCardService.updateBusinessCard(this.copyBusinessCard, language).subscribe(result => {
            this.alertService.infoAlert(this.translationService.translate('YourPersonalInformationHaveBeenUpdated'));
            this.businessCard = Object.assign({}, this.copyBusinessCard);
            this.businessCardAlertService.alertBusinessCard(this.businessCard);
            this.isProcessing = false;
            this.cancelSummary();
            this.cancelDescription();
        }, error => {
            this.alertService.warnAlert(this.translationService.translate('ErrConnectionRefusedSend'));
            this.isProcessing = false;
        });
    }

    editSummary(): void {
        this.cancelDescription();
        // How to copy an object in Typescript
        this.copyBusinessCard = Object.assign({}, this.businessCard);
        this.isSummaryEditable = true;
    }

    cancelSummary(): void {
        this.isSummaryEditable = false;
    }

    editDescription(): void {
        this.cancelSummary();
        this.copyBusinessCard = Object.assign({}, this.businessCard);
        this.isDescriptionEditable = true;
    }

    cancelDescription(): void {
        this.isDescriptionEditable = false;
    }
}