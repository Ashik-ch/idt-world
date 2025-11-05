import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { outBoundTravelPackages, Package } from '../../../data/outbound-package.data';
// import { countryData } from '../../../data/inbound.data';
import { OutboundItinerary } from "./outbound-itinerary/outbound-itinerary";
// import { OutboundHotels } from "./outbound-hotels/outbound-hotels";
// import { OutboundSummary } from "./outbound-summary/inbound-summary";
// import { OutboundPricing } from "./outbound-pricing/inbound-pricing";
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { Booking } from "../../pages/booking/booking";
import { ChatbotService } from '../../../services/chatbot-service';
// import * as AOS from 'aos';
// import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-outbound-package',
  imports: [CommonModule, FormsModule, RouterModule,
    OutboundItinerary,
    //  OutboundHotels, OutboundSummary, OutboundPricing,
    NgxShineBorderComponent, Booking,],
  templateUrl: './outbound-package.html',
  styleUrl: './outbound-package.scss'
})
export class OutboundPackage {

  countryName = '';
  countryDescription = '';
  countryHighlights: any[] = [];
  availablePackages: any[] = [];
  popularDestinations: any[] = [];
  bestTimeToVisit: any[] = [];
  countryData: any;
  packageData: Package | null = null;
  activeTab: string = 'overview';
  activeAccordion: string = '';
  openSection: string[] = ['overview'];

  collapsibleSections = [
    { id: 'overview', title: 'Explore daily programme', delay: '0' },
    // { id: 'itinerary', title: 'Itinerary', delay: '100' },
    { id: 'hotels', title: 'Components of this Package', delay: '100' },
    { id: 'details', title: 'Details & Policies', delay: '200' },
    { id: 'pricing', title: 'Pricing', delay: '300' },

    // - Explore your itinerary
    // - Unwind in our partner hotels
    // - Travel without stress
    // - Savor delicious meals
    // - Engage in exclusive experiences
    // - Note what’s not included
    // - Enhance your adventure
    // - Discover exceptional value!
  ];

  constructor(private route: ActivatedRoute, private router: Router, private viewportScroller: ViewportScroller,
    private chatbotService: ChatbotService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const country = params['country'];
      this.loadPackageData(country);
      setTimeout(() => this.viewportScroller.scrollToPosition([0, 0]), 0);

    });
    // AOS.init({ duration: 700, once: true });
  }



  private loadPackageData(countryParam: string): void {
    if (countryParam) {
      console.log("countryParam", countryParam);
      this.packageData = outBoundTravelPackages.find(pkg =>
        pkg.id.toLowerCase() === countryParam.toLowerCase()
      ) || null;
      if (!this.packageData) {
        this.router.navigate(['/outbound']);
      }
    }
  }


  toggleSection(id: string) {
    console.log(id);

    if (this.openSection.includes(id)) {
      // already open → close it
      this.openSection = this.openSection.filter(s => s !== id);
    } else {
      // open new section, keep others
      this.openSection.push(id);
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleAccordion(section: string): void {
    this.activeAccordion = this.activeAccordion === section ? '' : section;
  }

  openChatbot() {
    this.chatbotService.triggerChat();
  }

}

