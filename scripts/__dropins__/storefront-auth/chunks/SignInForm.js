import{classes as X}from"@dropins/tools/lib.js";import{g as Y,c as w,u as Z,T as $,F as z,B as G}from"./useInLineAlert.js";import{useState as _,useCallback as b,useEffect as q,useMemo as V}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import{a as O}from"./getStoreConfig.js";import{r as R}from"./resendConfirmationEmail.js";import{s as tt,a as at}from"./simplifyTransformAttributesForm.js";import{jsxs as N,jsx as c}from"@dropins/tools/preact-jsx-runtime.js";import{c as st}from"./confirmEmail.js";import{useText as H}from"@dropins/tools/i18n.js";import{InLineAlert as rt}from"@dropins/tools/components.js";import{E as ot}from"./EmailConfirmationForm.js";import{P as et}from"./PasswordField.js";const it=({emailConfirmationStatusMessage:a,translations:s,initialEmailValue:e,routeSignUp:l,routeForgotPassword:m,routeRedirectOnSignIn:y,onErrorCallback:d,setActiveComponent:t,onSuccessCallback:u,onSignUpLinkClick:f,handleSetInLineAlertProps:r,routeRedirectOnEmailConfirmationClose:E})=>{const[A,T]=_(""),[h,I]=_(!1),[g,F]=_(""),[L,k]=_(!1),[B,p]=_({userName:"",status:!1}),[P,x]=_(!1),C=b(async i=>{await R(i),I(!0),r({})},[r]);q(()=>{a!=null&&a.text&&r({text:a.text,type:a.status?a.status:void 0})},[a,r]);const M=b(i=>s?N("span",{className:"auth-signInForm__resend-email-notification",children:[s.resendEmailInformationText," ",c("button",{onClick:()=>C(i),children:s.resendEmailButtonText})," ",s.resendEmailAdditionalText]}):"",[C,s]),U=b(async i=>{var K;r({}),x(!0);const n=Y(i.target);if(n.password||(k(!0),x(!1)),n!=null&&n.email&&(n!=null&&n.password)){const{email:D,password:Q}=n,o=await O({email:D,password:Q,handleSetInLineAlertProps:r,onErrorCallback:d,translations:s});if((K=o==null?void 0:o.errorMessage)!=null&&K.length){T(D);const W=o.errorMessage.includes("This account isn't confirmed. Verify and try again.")?M(D):o.errorMessage;r({text:W,type:"error"}),F("")}o!=null&&o.userName&&(i.target.reset(),w(y)?window.location.href=y():(u==null||u({userName:o==null?void 0:o.userName,status:!0}),p({userName:o==null?void 0:o.userName,status:!0}))),k(!1)}x(!1),F("")},[M,r,s,d,y,u]),v=b(()=>{if(w(t)){t("resetPasswordForm");return}w(m)&&(window.location.href=m())},[m,t]),S=b(()=>{if(w(f)&&f(),w(t)){t("signUpForm");return}w(l)&&(window.location.href=l())},[f,l,t]),j=V(()=>{const i=tt(at);return e!=null&&e.length?i==null?void 0:i.map(n=>({...n,defaultValue:e})):i},[e]),J=b(()=>{r({}),w(E)?window.location.href=E():I(!1)},[r,E]);return{userEmail:A,defaultEnhancedEmailFields:j,passwordError:L,isSuccessful:B,isLoading:P,signInPasswordValue:g,showEmailConfirmationForm:h,setShowEmailConfirmationForm:I,setSignInPasswordValue:F,submitLogInUser:U,forgotPasswordCallback:v,onSignUpLinkClickCallback:S,handledOnPrimaryButtonClick:J}},nt=()=>{let a=new URL(window.location.href),s=a.searchParams.get("email"),e=a.searchParams.get("key");s&&e&&(a.searchParams.delete("email"),a.searchParams.delete("key"),window.history.replaceState({},document.title,a.toString()))},mt=({enableEmailConfirmation:a})=>{const s=H({accountConfirmMessage:"Auth.EmailConfirmationForm.accountConfirmMessage",accountConfirmationEmailSuccessMessage:"Auth.EmailConfirmationForm.accountConfirmationEmailSuccessMessage"}),[e,l]=_({text:"",status:""});return q(()=>{if(a){const{search:m}=window.location;m.includes("email=")&&m.includes("key=")&&(async()=>{var u,f,r;const d=new URLSearchParams(m),t=await st({customerEmail:d.get("email"),customerConfirmationKey:d.get("key")});if(!t)return null;(u=t==null?void 0:t.errors)!=null&&u.length?l({text:t==null?void 0:t.errors[0].message,status:"error"}):(l({text:t.data.confirmEmail.customer.email?s.accountConfirmationEmailSuccessMessage.replace("{email}",(r=(f=t==null?void 0:t.data)==null?void 0:f.confirmEmail.customer)==null?void 0:r.email):s.accountConfirmMessage,status:"success"}),nt())})()}},[a,s]),{emailConfirmationStatusMessage:e}},It=({formSize:a="default",initialEmailValue:s="",renderSignUpLink:e=!1,enableEmailConfirmation:l=!1,hideCloseBtnOnEmailConfirmation:m=!1,routeRedirectOnEmailConfirmationClose:y,routeRedirectOnSignIn:d,routeForgotPassword:t,routeSignUp:u,onSuccessCallback:f,setActiveComponent:r,onErrorCallback:E,onSignUpLinkClick:A,successNotificationForm:T})=>{const h=H({title:"Auth.SignInForm.title",buttonPrimary:"Auth.SignInForm.buttonPrimary",buttonSecondary:"Auth.SignInForm.buttonSecondary",buttonTertiary:"Auth.SignInForm.buttonTertiary",resendEmailInformationText:"Auth.Notification.resendEmailNotification.informationText",resendEmailButtonText:"Auth.Notification.resendEmailNotification.buttonText",resendEmailAdditionalText:"Auth.Notification.resendEmailNotification.additionalText",customerTokenErrorMessage:"Auth.Api.customerTokenErrorMessage"}),{emailConfirmationStatusMessage:I}=mt({enableEmailConfirmation:l}),{inLineAlertProps:g,handleSetInLineAlertProps:F}=Z(),{userEmail:L,defaultEnhancedEmailFields:k,passwordError:B,isSuccessful:p,isLoading:P,signInPasswordValue:x,showEmailConfirmationForm:C,setSignInPasswordValue:M,submitLogInUser:U,forgotPasswordCallback:v,onSignUpLinkClickCallback:S,handledOnPrimaryButtonClick:j}=it({translations:h,emailConfirmationStatusMessage:I,initialEmailValue:s,routeSignUp:u,routeForgotPassword:t,routeRedirectOnSignIn:d,setActiveComponent:r,onErrorCallback:E,onSuccessCallback:f,onSignUpLinkClick:A,handleSetInLineAlertProps:F,routeRedirectOnEmailConfirmationClose:y});return T&&p.status?T(p.userName):C?c(ot,{formSize:a,userEmail:L,inLineAlertProps:g,hideCloseBtnOnEmailConfirmation:m,handleSetInLineAlertProps:F,onPrimaryButtonClick:j}):N("div",{className:X(["auth-signInForm",a]),"data-testid":"signInForm",children:[c($,{text:h.title,bottomLine:!1,className:"auth-signInForm__title"}),g.text?c(rt,{"data-testid":"authInLineAlert",className:"auth-signInForm__notification",type:g.type,variant:"secondary",heading:g.text,icon:g.icon}):null,N(z,{name:"signIn_form",className:"auth-signInForm__form",submitCallback:U,isLoading:P,fieldsConfig:k,children:[c(et,{className:"auth-signInForm__form__password",isError:B,initialPassword:x,setPasswordValueCallback:M}),N("div",{className:"auth-signInForm__form__buttons",children:[N("div",{className:"auth-signInForm__form__buttons--combine",children:[c(G,{type:"button",variant:"tertiary",style:{padding:0},buttonText:h.buttonTertiary,className:"auth-signInForm__button auth-signInForm__button--forgot",enableLoader:!1,onClick:v,"data-testid":"switchToSignUp"}),e?c("span",{}):null,e?c(G,{type:"button",variant:"tertiary",style:{padding:0},buttonText:h.buttonSecondary,className:"auth-signInForm__button auth-signInForm__button--signup",enableLoader:!1,onClick:S}):null]}),c(G,{type:"submit",buttonText:h.buttonPrimary,variant:"primary",className:"auth-signInForm__button auth-signInForm__button--submit",enableLoader:P})]})]})]})};export{It as S};
//# sourceMappingURL=SignInForm.js.map