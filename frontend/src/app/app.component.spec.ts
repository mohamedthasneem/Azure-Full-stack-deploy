import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { BroadcastService, MsalService, MsalAngularConfiguration } from '@azure/msal-angular';
import { MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular/dist/msal.service';
import { Configuration } from 'msal'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        MsalService,
        {
          provide: MSAL_CONFIG,
          useValue: {
            auth: {
              clientId: '4405d381-670a-4841-9643-cbe3def5fd3c', // This is your client ID
              authority: 'https://login.microsoftonline.com/aa232db2-7a78-4414-a529-33db9124cba7', // This is your tenant ID
              redirectUri: 'http://localhost:4200/profile',// This is your redirect URI
              postLogoutRedirectUri: "http://localhost:4200"
            },
            cache: {
              cacheLocation: 'localStorage',
              storeAuthStateInCookie: false
            },
          } as Configuration
        },
        {
          provide: MSAL_CONFIG_ANGULAR,
          useValue: {
            popUp: false,
            consentScopes: [ 'user.read' ],
            unprotectedResources: [],
            protectedResourceMap: [
              ['https://graph.microsoft.com/v1.0/me', ['user.read']]
            ]
          } as MsalAngularConfiguration
        },
        BroadcastService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'employee-management'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('employee-management');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to employee-management!');
  });
});
