import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscussCard } from '../../interface';
import { DiscussCardComponent } from './discuss-card';


describe('DiscussCardComponent', () => {
    let fixture: ComponentFixture<DiscussCardComponent>;
    const discussCard: DiscussCard={
        id: 1,
        title: 'Discuss Card Title',
        description: 'Discuss Card Description',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DiscussCardComponent],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();
        fixture = TestBed.createComponent(DiscussCardComponent);
        fixture.componentRef.setInput('discussCard', discussCard);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    })

    it('should show the title and description',()=>{
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h2')?.textContent).toContain(discussCard.title);
        expect(compiled.querySelector('p')?.textContent).toContain(discussCard.description);        
    })

    it('should render the icon',()=>{
        expect((fixture.nativeElement as HTMLElement).querySelector('svg')).toBeTruthy();
    })
})