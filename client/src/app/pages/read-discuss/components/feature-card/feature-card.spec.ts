import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCardComponent } from './feature-card';
import { FeatureCard } from '../../interface';

describe('FeatureCardComponent', () => {
    let fixture: ComponentFixture<FeatureCardComponent>;
    const featureCard: FeatureCard = {
        id: 1,
        stepNumber: '01',
        title: 'Feature Card Title',
        description: 'Feature Card Description',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureCardComponent],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();
        fixture = TestBed.createComponent(FeatureCardComponent);
        fixture.componentRef.setInput('feature', featureCard);
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    })

    it('should render feature card title and description', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h2')?.textContent).toContain('01');
        expect(compiled.querySelector('h3')?.textContent).toContain(featureCard.title);
        expect(compiled.querySelector('p')?.textContent).toContain(featureCard.description);
    });

    it('should update when the input changes', () => {
        fixture.componentRef.setInput('feature', { ...featureCard, title: 'Changed Title' });
        fixture.detectChanges();
        expect((fixture.nativeElement as HTMLElement).querySelector('h3')?.textContent).toContain(
            'Changed',
        );
    });
});