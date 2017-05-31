import { WriterAddComponent } from './../writers/writers-add/writer-add.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('WriterAddComponent (inline template)', () => {

    let comp: WriterAddComponent;
    let fixture: ComponentFixture<WriterAddComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WriterAddComponent], // declare the test component
        });

        fixture = TestBed.createComponent(WriterAddComponent);

        comp = fixture.componentInstance; // WriterAddComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
    it('should display original title', () => {
        fixture.detectChanges();
        console.log(el.textContent);
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
});